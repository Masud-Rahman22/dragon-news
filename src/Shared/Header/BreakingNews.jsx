import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div>
            <div className='bg-[#F3F3F3] flex'>
                <button className='btn btn-secondary rounded'>Latest</button>
                <Marquee>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;