import React from 'react';
import '../css/communityDiv.css'


const CommunityDiv = () => {
  return (
    <>
        <div className="hoverbox1">
            <div className='left'>
            <div className="link1">
                <a href="/" className='links'>Events</a>
                
            </div>
            <div className="link2">
                <a href="/" className='links'>Sponsorships & Collaborations <span>&gt;</span></a>
                
            </div>
            <div className="link3">
                <a href="/" className='links'>Campus Ambassador Program <span>&gt;</span></a>
                {/* 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 */}
            </div>
            </div>
            <div className="right">
                    <div className="link4">
                        Upcoming Events <br />
                        <a href="/" className='links-2'>View More &gt;</a>
                    </div>
                    <div className="link5">
                    Past Events <br />
                        <a href="/" className='links-2'>View More&gt;</a>
                    </div>
            </div>
        </div>
    </>
  )
}

export default CommunityDiv