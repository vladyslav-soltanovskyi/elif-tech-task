import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { ChangeEvent, FC, useEffect } from "react";
import { Field } from "..";
import AutoCompleteOption from "./auto-complete-option";
import { IField } from "../field/field";

import styles from "./auto-complete.module.scss";

interface IAutoCompleteProps extends IField {
  isLoaded: boolean;
  addressValue: string;
  onChangeAddress: (address: string) => void;
  changeCoordinates: (coordinates: google.maps.LatLngLiteral) => void;
}

const AutoComplete: FC<IAutoCompleteProps> = ({
  isLoaded,
  addressValue,
  onChangeAddress,
  changeCoordinates,
  ...rest
}) => {
  const {
    ready,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
    init,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChangeAddress(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      onChangeAddress(description);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        changeCoordinates({ lat, lng });
      });
    };

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);

  return (
    <div ref={ref} className={styles.auto__complete__container}>
      <Field
        {...rest}
        value={addressValue}
        onChange={handleInput}
        disabled={!ready}
        name="address"
        placeholder="Address"
      />
      {status === "OK" && (
        <div className={styles.auto__complete__list__container}>
          <ul className={styles.auto__complete__list}>
            {data.map((suggestion) => (
              <AutoCompleteOption
                key={suggestion.place_id}
                mainText={suggestion.structured_formatting.main_text}
                secondaryText={suggestion.structured_formatting.secondary_text}
                handleSelect={handleSelect}
                suggestion={suggestion}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
