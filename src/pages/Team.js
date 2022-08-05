import React from 'react'
import teamData from '../data/team.json';
import Member from '../component/Member';

export default function Team() {
    return (
        <section className="team-page page-section" id="ourteam">
            <div className="container">
                <div className="justify-content-center">
                    <h2 className="mb-0 content_intro hr-line"> Our Team </h2>
                    <h2 className="mb-0 conetent_title text-center">
                        Meet Our<br />Expert Member</h2>
                    <p className="text-center mb-0"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur at sunt, cupiditate maxime nobis eum minus vero, nisi necessitatibus totam deleniti distinctio nihil error quos cum. Culpa explicabo architecto enim, quos fugit in, esse modi doloribus iusto corporis cupiditate laboriosam ratione dignissimos iure? Est laudantium doloremque eum eveniet, mollitia ea..</p>
                </div>

                <div className="row mx-md-0 team-page">
                    <div className="container">
                        <div className="row mtn-30">
                            {
                                teamData.map(member => (
                                    <Member key={member.id} id={member.id} name={member.name} designation={member.designation} profilePic={member.profilePic} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
