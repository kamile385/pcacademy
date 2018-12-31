import React, { Component } from "react";
import data from '../../MOCK_DATA_programs.json';

export default function Programs({ match }) {
  const program_id = match.params.id;
  return (
    <div>
      <h3>ID: {program_id}</h3>
    </div>
  );
}