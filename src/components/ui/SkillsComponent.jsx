import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const SkillsComponent = ({ skills, setSkills }) => {
  const [input, setInput] = useState("");

  const handleAddSkill = () => {
    const newSkill = input.trim();
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">Skills</label>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter a skill and press Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full border border-br-primary/50 rounded-md bg-transparent text-white px-3 py-2 text-sm outline-none"
        />
        <button
          type="button"
          onClick={handleAddSkill}
          disabled={!input.trim() || skills.includes(input.trim())}
          className="px-4 py-2 bg-primary text-white text-sm rounded disabled:opacity-40 hover:bg-btn-bg"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-light-bg/10 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1"
          >
            <span>{skill}</span>
            <button
              type="button"
              onClick={() => handleRemoveSkill(skill)}
              className="hover:text-red-400"
            >
              <IoClose size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
