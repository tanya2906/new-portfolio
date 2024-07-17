import React from 'react'
import { GiCheckMark } from "react-icons/gi";
const SkillList = ({skill}) => {
  return (
    <span>
        <i><GiCheckMark /></i>
        <p>{skill}</p>
    </span>
  )
}

export default SkillList