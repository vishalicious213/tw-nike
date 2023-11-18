const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <div 
            className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${bigShoeImage === imgURL ? "border-coral-red" : "border-transparent"}`}
            onClick={handleClick}
        >
            ShoeCard
        </div>
    )
}

export default ShoeCard