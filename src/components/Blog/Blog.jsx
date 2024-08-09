import PropTypes from 'prop-types';

const Blog = ({blog , handleBookmark,handleReadTime}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags}= blog
    return (
        <div className='my-6'>
            <img className='rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center my-5'>
                <div className='flex gap-6 items-center'>
                    <div>
                        <img className='w-[60px] ' src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl text-black font-bold leading-[38px]'>{author}</h3>
                        <p className='text-base text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                        <h2 className='text-xl font-medium text-[#11111199]'>{reading_time} min read</h2>
                        <button onClick={()=>handleBookmark(blog)}> <i className="fa-regular fa-bookmark text-[#11111199]"></i></button>
                </div>
            </div>
            <h2 className='text-[40px] text-black font-bold leading-[64px] w-5/6'>{title}</h2>
            <div className='flex gap-4 text-xl font-medium text-[#11111199] my-4'>
                <h3>{hashtags[0]}</h3>
                <h3>{hashtags[1]}</h3>
            </div>
            <div>
            <button onClick={(reading_time,id)=>handleReadTime(reading_time,id)} className='border-b-2 mb-9 border-[#6047EC] font-semibold text-xl text-[#6047EC]'>Mark As Read</button>
            </div>
            <div className="border-[1px] border-[#11111126]"></div>
            
        </div>
    );
};

Blog.proptypes={
    blog : PropTypes.object.isRequired,
    title : PropTypes.string.isRequired
}

export default Blog;