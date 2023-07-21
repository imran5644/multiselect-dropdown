import React, { useState } from "react";
import PropTypes from "prop-types";
import '../../../src/multiselectdropdown.css';
 
export const MultiSelectDropdown = ({ 
  options, 
  label, 
  label2, 
  backgroundColor, 
  color, 
  checkboxcolor,
  disable, 
  onSelectAll, 
  onClear, 
  onSingleClear 
  }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const buttoncolorStyle = {
    color: color ? color : "#000000",
    backgroundColor: backgroundColor ? backgroundColor : "#029CFD",
  };

  const buttonLabellength = (label) => {
    return label ? label.length < 10 ? label : "" : ""
  };

  const selectMap = Object.entries(options).map((option) => {
    return {
      country: option[0],
      name:  option[1].map((name) => ({
        ...name
      }))
    }
  });
 
  const [groupData, setGroupData] = useState(selectMap);

  // const convertNestedArrayToFlatObject = (nestedArray) => {
  //   const flatObject = {};
  //   for (const countryObject of nestedArray) {
  //     const country = countryObject.country;
  //     const names = countryObject.name;
  //     if (!flatObject.hasOwnProperty(country)) {
  //       flatObject[country] = [];
  //     }
  //     flatObject[country].push(...names);
  //   }
  //   return flatObject;
  // };

  const convertNestedArrayToFlatObject = (nestedArray) => {
    const flatObject = {};
    for (const countryObject of nestedArray) {
      const country = countryObject.country;
      const names = countryObject.name;
      if (!flatObject.hasOwnProperty(country)) {
        flatObject[country] = [];
      }
      flatObject[country].unshift(...names);
    }
    return flatObject;
  };

  // const handleOptionSelect = (groupIndex, optionIndex, groupData) => {
  // const selectedName = groupData[groupIndex].name;
  // const selectedOptionName = groupData[groupIndex].options[optionIndex].label;
  //   const checkedSingleBox = groupData.map(data => ({
  //     ...data,
  //     options: data.name === selectedName
  //     ? data.options.map(item => {
  //       if (item.label === selectedOptionName) {
  //         return {...item, selected: !item.selected}; 
  //       } else {
  //         return item;
  //       }
  //   })
  //       : data.options
  //   }));
    
  //   setGroupData(checkedSingleBox);
  //   if(checkedSingleBox[groupIndex].options[optionIndex].selected === true){
  //     onSingleSelect(groupIndex);
  //     console.log(selectedName,  checkedSingleBox[groupIndex].options[optionIndex].label );
  //   }else {
  //     onSingleClear(groupIndex)
  //     console.log(selectedName, checkedSingleBox[groupIndex].options[optionIndex].label );
  //   }
  // }; 

 const handleOptionSelect = (groupIndex, optionIndex, groupData) => {
  const selectedName = groupData[groupIndex].country;
  const selectedOptionId = groupData[groupIndex].name[optionIndex].id;
    const checkedSingleBox = groupData.map(data => ({
      ...data,
      name: data.country === selectedName
      ? data.name.map(item => {
        if (item.id === selectedOptionId) {
          return {...item, selected: !item.selected}; 
        } else {
          return item;
        }
    })
        : data.name
    }));
    let opt = convertNestedArrayToFlatObject(checkedSingleBox);
    setGroupData(checkedSingleBox);
    if(checkedSingleBox[groupIndex].name[optionIndex].selected === true){
      onSelectAll(groupIndex, opt);
      console.log(selectedName,  checkedSingleBox[groupIndex].name[optionIndex].name );
    }else {
      onSingleClear(groupIndex, opt)
      console.log(selectedName, checkedSingleBox[groupIndex].name[optionIndex].name );
    }
  }; 

  // const handleSelectAll = (groupData, groupIndex) => {
  //   const selectedName = groupData[groupIndex].name;
  //   const checkedbox = groupData.map(data => ({
  //     ...data,
  //     options: data.name === selectedName
  //       ? data.options.map(att => ({
  //         ...att,
  //         selected: true
  //       }))
  //       : data.options
  //   }));

  //   setGroupData(checkedbox);
  //   onSelectAll(groupIndex);
  // };

  const handleSelectAll = (groupData, groupIndex) => {
    const selectedName = groupData[groupIndex].country;
    const checkedbox = groupData.map(data => ({
      ...data,
      name: data.country === selectedName
        ? data.name.map(att => ({
          ...att,
          selected: true
        }))
        : data.name
    }));
    let opt = convertNestedArrayToFlatObject(checkedbox);
    setGroupData(checkedbox);
    onSelectAll(groupIndex, opt);
  };

  // const handleClear = (groupIndex) => {
  //   const selectedName = groupData[groupIndex].name;
  //   const unCheckedbox = groupData.map(data => ({
  //     ...data,
  //     options: data.name === selectedName
  //       ? data.options.map(att => ({
  //         ...att,
  //         selected: false
  //       }))
  //       : data.options
  //   }));
  //   setGroupData(unCheckedbox);
  //   onClear(groupIndex);
  // };
  const handleClear = (groupIndex) => {
    const selectedName = groupData[groupIndex].country;
    const uncheckedbox = groupData.map(data => ({
      ...data,
      name: data.country === selectedName
        ? data.name.map(att => ({
          ...att,
          selected: false
        }))
        : data.name
    }));
    let opt = convertNestedArrayToFlatObject(uncheckedbox);
    setGroupData(uncheckedbox);
    onClear(groupIndex, opt);
  };

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

//   return (
//     <div>
//       <button className="togglebutton" onClick={toggleDropdown}><span className="team-width">Select(s)</span><div id="dialog2" className="triangle_down1"></div></button>
//       {isExpanded && (
//       <div className="scroll-dropdown">
//       <p className="head-1">Select(s)</p>
//       {groupData && groupData.map((group, groupIndex) => (
//         <div key={groupIndex}>
//           <div className="singleline">
//             <div>
//             <p className="groupname">{group.name}</p>
//             </div>
//             <div className="buttonset">
//             <button className="buttonStyle buttonSize" onClick={() => handleSelectAll(groupData, groupIndex)}>All</button>
//             <button className="buttonStyle" onClick={() => handleClear(groupIndex)}>Clear</button>
//             </div>
//           </div>
//           <div className="optionlist">
//           {group && group.options.map((option, optionIndex) => (
//             <div className="optionelement">
//             <label key={optionIndex}>
//               <input
//                 type="checkbox"
//                 checked={option.selected ? true : false} 
//                 onChange={() => handleOptionSelect(groupIndex, optionIndex, groupData)}
//               />
//               {option.label}
//             </label>
//             </div>
//           ))}
//           </div>
//           <p className="break"></p>
//         </div>
//       ))}
//       </div>
//        )}
//     </div> 
//   );
// };

return (
  <div>
    <button className="togglebutton" onClick={toggleDropdown}><span className="team-width">Select(s)</span><div id="dialog2" className="triangle_down1"></div></button>
    {isExpanded && (
    <div className="scroll-dropdown">
    <p className="head-1">Select(s)</p>
    {groupData && groupData.map((group, groupIndex) => (
      <div key={group.country}>
        <div className="singleline">
          <div>
          <p className="groupname">{group.country}</p>
          </div>
          <div className="buttonset">
          <button style={buttoncolorStyle} 
          className="buttonStyle buttonSize" 
          disabled={disable ? disable : false}
          onClick={() =>
           handleSelectAll(groupData, groupIndex)
           }>
          {buttonLabellength(label) ? label : "All"}
          </button>
          <button 
          style={buttoncolorStyle} 
          className="buttonStyle"
          disabled={disable ? disable : false} 
          onClick={() => 
          handleClear(groupIndex)}>
          {buttonLabellength(label2) ? label2 : "Clear"}
          </button>
          </div>
        </div>
        <div className="optionlist">
        {group && group.name.map((option, optionIndex) => (
          <div className="optionelement" key={option.id}>
          <label>
            <input
              type="checkbox"
              style= {{accentColor: checkboxcolor ? checkboxcolor :"#029CFD"}}
              checked={option.selected ? true : false} 
              onChange={() => handleOptionSelect(groupIndex, optionIndex, groupData)}
            />
            {option.name}
          </label>
          </div>
        ))}
        </div>
        <p className="break"></p>
      </div>
    ))}
    </div>
     )}
  </div> 
);
};

MultiSelectDropdown.propTypes = {
  label: PropTypes.string,
  label2: PropTypes.string,
  checkboxcolor: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  disable: PropTypes.bool,
  handleClick: PropTypes.func,
}