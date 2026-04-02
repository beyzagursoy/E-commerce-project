import React from 'react';

const AboutVideo = ({ videoData }) => (
    <section className="max-w-[1050px] mx-auto py-20 px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group aspect-video">
            <video
                controls
                poster={videoData.thumbnail}
                className="w-full h-full object-cover"
            >
                <source src={videoData.videoUrl} type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
            </video>
        </div>
    </section>
);

export default AboutVideo;