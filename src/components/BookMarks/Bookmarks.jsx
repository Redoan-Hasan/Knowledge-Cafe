import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmark,currentTime}) => {
    return (
        <div className="rounded-lg h-fit w-[30%]">
            <div className="my-6 ">
                <h1 className="text-2xl font-bold leading-[38px] bg-[#6047EC1A] text-[#6047EC] px-4 py-10 text-center rounded-lg border-2 border-[#6047EC]">Spent time on read : {currentTime} min</h1>
            </div>
            <div  className="p-[30px] rounded-lg bg-[#1111110D] ">
                <h1 className="text-2xl font-bold leading-[38px]">Bookmarked Blogs : {bookmark.length}</h1>
                {
                    bookmark.map(bookmark=> <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;