import React, { useState } from "react";

import '../../../src/multiselectdropdown.css';
 
export const MultiSelectDropdown = ({ options, onSingleSelect, onSelectAll, onClear, onSingleClear }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const playersMap = Object.entries(options).map((player,id) => {
    return {
      country: player[0],
      cities:  player[1].map((city) => ({
        ...city
      }))
    }
  });

 
  const [groupData, setGroupData] = useState(playersMap);


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
  const selectedOptionId = groupData[groupIndex].cities[optionIndex].id;
    const checkedSingleBox = groupData.map(data => ({
      ...data,
      cities: data.country === selectedName
      ? data.cities.map(item => {
        if (item.id === selectedOptionId) {
          return {...item, selected: !item.selected}; 
        } else {
          return item;
        }
    })
        : data.cities
    }));
    
    setGroupData(checkedSingleBox);
    if(checkedSingleBox[groupIndex].cities[optionIndex].selected === true){
      onSingleSelect(groupIndex);
      console.log(selectedName,  checkedSingleBox[groupIndex].cities[optionIndex].name );
    }else {
      onSingleClear(groupIndex)
      console.log(selectedName, checkedSingleBox[groupIndex].cities[optionIndex].name );
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
      cities: data.country === selectedName
        ? data.cities.map(att => ({
          ...att,
          selected: true
        }))
        : data.cities
    }));
    setGroupData(checkedbox);
    onSelectAll(groupIndex);
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
      cities: data.country === selectedName
        ? data.cities.map(att => ({
          ...att,
          selected: false
        }))
        : data.cities
    }));
    setGroupData(uncheckedbox);
    onClear(groupIndex);
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
      <div key={groupIndex}>
        <div className="singleline">
          <div>
          <p className="groupname">{group.country}</p>
          </div>
          <div className="buttonset">
          <button className="buttonStyle buttonSize" onClick={() => handleSelectAll(groupData, groupIndex)}>All</button>
          <button className="buttonStyle" onClick={() => handleClear(groupIndex)}>Clear</button>
          </div>
        </div>
        <div className="optionlist">
        {group && group.cities.map((option, optionIndex) => (
          <div className="optionelement">
          <label key={optionIndex}>
            <input
              type="checkbox"
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

