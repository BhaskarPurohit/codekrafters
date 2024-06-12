// CourseSelect.js
import React from 'react';
import { Select, MenuItem } from '@mui/material';

function CourseSelect() {
  const [selectedCourse, setSelectedCourse] = React.useState('');

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <Select
      value={selectedCourse}
      onChange={handleCourseChange}
      displayEmpty
      
    >
      <MenuItem value="" disabled>
        Select Course
      </MenuItem>
      <MenuItem value="course1">Data Science </MenuItem>
      <MenuItem value="course2">Machine Learning</MenuItem>
      <MenuItem value="course3">Data Structures & Algorithms</MenuItem>
    </Select>
  );
}

export default CourseSelect;
