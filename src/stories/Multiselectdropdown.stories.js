import React from "react";
import { MultiSelectDropdown } from "../components/Multiselectdropdown/Multiselectdropdown";

export default {
  title: "Components/MultiSelectDropdown",
  component: MultiSelectDropdown
} 

const Template = (args) => <MultiSelectDropdown {...args} />;

const options = { 
  "France":[{"name":"Antoine Griezmann",selected: false, "id":454},
            {"name":"Paul Pogba",selected:false, "id": 254}],
  "Croatia":[{"name":"Luka Modrić",selected:false, "id":354},
             {"name":"Ivan Rakitić",selected: false, "id":442}],
  "Argentina":[{"name":"Lionel Messi",selected: false, "id": 404}, 
               {"name":"Elena Martínez",selected:false, "id":402}]
  };


const handleOptionclear = (groupIndex, options) => {
  console.log(`Unselected a member for group ${groupIndex + 1}`);
  console.log(`${JSON.stringify(options)}`)
};

const handleSelect = (groupIndex, options) => {
  console.log(`Selected group member of ${groupIndex + 1}`);
  console.log(`${JSON.stringify(options)}`);
};

const handleClear = (groupIndex, options) => {
  console.log(`Clear checkbox for group ${groupIndex + 1}`);
  console.log(`${JSON.stringify(options)}`)
};

export const MultiSelectWithCheckbox = Template.bind({});
MultiSelectWithCheckbox.args = {
  options,
  onSelect: handleSelect,
  onClear: handleClear,
  onSingleClear: handleOptionclear,
  backgroundColor: "red",
  label: "Select",
  label2: "Unselect",
  color: "yellow",
  checkboxcolor: "green",
  disable: true
};