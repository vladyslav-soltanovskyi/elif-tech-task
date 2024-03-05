import { FC } from "react";
import { Suggestion } from "use-places-autocomplete";

import styles from './auto-complete-option.module.scss';

interface IAutoCompleteOptionProps {
  mainText: string;
  secondaryText: string;
  suggestion: Suggestion;
  handleSelect: (suggestion: Suggestion) => () => void;
}

const AutoCompleteOption: FC<IAutoCompleteOptionProps> = ({
  mainText,
  secondaryText,
  suggestion,
  handleSelect
}) => {

  return (
    <li
      className={styles.option}
      onClick={handleSelect(suggestion)}
    >
      <strong>{mainText}</strong> <small>{secondaryText}</small>
    </li>
  );
}

export default AutoCompleteOption;