const RegionSelect = ({handleRegionSelect, regionList})=>{
    
    const regionOptions = regionList.map((region)=>{return <option>{region}</option>});

    return (
    <select onChange={handleRegionSelect}>
    <option id="default2" selected disabled>Choose a continent to filter: </option>
      {regionOptions}
    </select>
    )
};

export default RegionSelect