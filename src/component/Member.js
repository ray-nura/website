import React from 'react';

function Member({ id, profilePic, name, designation }) {
    return (
        <div className="col-sm-6 col-lg-3 col-6 col-md-4">
            <div className="team-mem-item">
                <figure className="member-pic">
                    <img src={profilePic} alt={name} />
                </figure>
                <div className="member-info">
                    <span className="designation"><b>{designation}</b></span><br />
                    <span className="designation">{name}</span>
                </div>
            </div>
        </div>
    );
}

export default Member;
