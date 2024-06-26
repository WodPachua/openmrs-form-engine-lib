import React from 'react';
import { DefinitionTooltip } from '@carbon/react';
import styles from './label.scss';

type LabelProps = {
  value: string;
  tooltipText?: string;
};

export const LabelField: React.FC<LabelProps> = ({ value, tooltipText }) => {
  return (
    <div className={styles.label}>
      <DefinitionTooltip direction="bottom" tabIndex={0} tooltipText={tooltipText}>
        <span className="cds--label">{`${value}:`}</span>
      </DefinitionTooltip>
    </div>
  );
};
