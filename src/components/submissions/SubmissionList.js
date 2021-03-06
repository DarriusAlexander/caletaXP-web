import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import _ from 'lodash';

import { timeAgo } from '../../utils/Helpers';

const SubmissionList = ({ submissions, handleNav }) => {
  const [sortedSubmissions, setSortedSubmissions] = useState([]);

  useEffect(() => {
    setSortedSubmissions(
      _.sortBy(submissions, submission => {
        return new Date(submission.fields.createdAt).getTime();
      }).reverse(),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submissions]);

  const handleClick = submissionId => {
    //redirect to page
    handleNav(submissionId);
  };

  const renderRows = () => {
    return sortedSubmissions.map(submission => {
      return (
        <tr
          key={submission.id}
          onClick={() => handleClick(submission.fields.submissionId)}
        >
          <td>{submission.fields.submissionId}</td>
          <td>{submission.fields.daoName}</td>
          <td>
            {submission.fields.username} / {submission.fields.ethAddress}
          </td>

          <td>{submission.fields.ups.length}</td>
          <td>{timeAgo(submission.fields.createdAt)}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Table hover className="submissions">
        <thead>
          <tr>
            <th>ID</th>
            <th>Dao Name</th>
            <th>Username/Address</th>
            <th>1UPs</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </Table>
    </>
  );
};

export default SubmissionList;
