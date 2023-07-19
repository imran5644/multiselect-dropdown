import React from "react";
import { MultiSelectDropdown } from "../components/Multiselectdropdown/Multiselectdropdown";

export default {
  title: "Components/MultiSelectDropdown",
  component: MultiSelectDropdown,
} 

const Template = (args) => <MultiSelectDropdown {...args} />;

const players = { 
  "France":[{"name":"Antoine Griezmann",selected: false,id:454},
            {"name":"Paul Pogba",selected:false,id: 254}],
  "Croatia":[{"name":"Luka Modrić",selected:false,id:354},
             {"name":"Ivan Rakitić",selected: false, id:442}],
  "Argentina":[{"name":"Lionel Messi",selected: false, id: 404}, 
               {"name":"Elena Martínez",selected:false, id:402}]
  };


const handleOptionSelect = (groupIndex) => {
    console.log(`Selected a member for group ${groupIndex + 1}`);
};
const handleOptionclear = (groupIndex) => {
  console.log(`Unselected a member for group ${groupIndex + 1}`);
};

const handleSelectAll = (groupIndex) => {
  console.log(`Selected all group member of ${groupIndex + 1}`);
};

const handleClear = (groupIndex) => {
  console.log(`Clear checkbox for group ${groupIndex + 1}`);
};


export const MultiSelectWithCheckbox = Template.bind({});
MultiSelectWithCheckbox.args = {
  players,
  onSingleSelect: handleOptionSelect,
  onSelectAll: handleSelectAll,
  onClear: handleClear,
  onSingleClear: handleOptionclear
};