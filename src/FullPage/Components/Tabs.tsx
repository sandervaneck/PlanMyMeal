import { Tabs, Tab } from "@mui/material";

export const IconLabelTabs = ({
  value,
  setValue,
}: {
  value: number;
  setValue: (v: number) => void;
}) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} centered>
      <Tab
        // icon={<PenAndPaperIcon />}
        label="Describe wishes"
      />
      <Tab
        // icon={<ImageIcon />}
        label="Use Images"
      />
    </Tabs>
  );
};
