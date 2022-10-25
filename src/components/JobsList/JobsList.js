import React, { useState } from "react";
import ReactModal from "react-modal";
import { ModalBody } from "../Modal/Modal.css";
import MarkdownIt from "markdown-it";
import { Anchor, Box, Button, Modal, Title } from "@mantine/core";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,.3)";
ReactModal.defaultStyles.overlay.zIndex = 50;
ReactModal.defaultStyles.content.margin = "auto";
ReactModal.defaultStyles.content.maxWidth = 900;

const JobMeta = ({ data }) => {
  if (!data?.profile) {
    return null;
  }

  return (
    <div className="meta-section">
      <h3>Job Profile</h3>
      <p>{data.profile.profile}</p>
      <div className="meta-grid">
        <div>Job Type</div>
        <div>: {data.jobType.join(", ")}</div>
        <div>Location</div>
        <div>: {data.location.join(", ")}</div>
        <div>Skills</div>
        <div>: {data.skills.join(", ")}</div>
        <div>Education</div>
        <div>: {data.education}</div>
        <div>Experience</div>
        <div>: {data.experience}</div>
      </div>
    </div>
  );
};

const JobsList = ({ data }) => {
  const [selectedJob, setSelectedJob] = useState({});

  const md = new MarkdownIt({
    html: true,
    linkify: false,
  });

  return (
    <>
      <div className="job-listing">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="job-card"
              onClick={() => setSelectedJob(item)}
            >
              <h4 className="job-title">{item.title}</h4>
              <div className="job-tags">
                {item.tags.map((tag, j) => (
                  <span key={j} className="job-tag-item">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="job-desc-short">{item.shortDescription}</p>
            </div>
          );
        })}
      </div>
      <Modal
        opened={selectedJob?.title}
        onClose={() => setSelectedJob({})}
        title={<Title order={3}>{selectedJob?.title}</Title>}
        size='xl'
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <ModalBody>
          <JobMeta data={selectedJob} />
          {selectedJob?.jobDescription?.jobDescription && (
              <p
                dangerouslySetInnerHTML={{
                  __html: md.render(selectedJob?.jobDescription?.jobDescription),
                }}
              />
            )}
            <Box mt="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Anchor href={`mailto:jobs@pentafox.in?subject=Job Application - ${selectedJob?.title}`}>
                <Button color='blue'>Apply Now</Button>
              </Anchor>
            </Box>
        </ModalBody>
      </Modal>
    </>
  );
};

export default JobsList;
