

const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h1 className="bg-white rounded-lg p-5 my-4 text-lg font-semibold leading-[28px]">{bookmark.title}</h1>
        </div>
    );
};

export default Bookmark;