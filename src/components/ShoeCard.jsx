const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoeImg) {
            changeBigShoeImage(imgURL.bigShoeImg)
        }
    }
    return (
        <div 
            className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${bigShoeImg === imgURL ? "border-coral-red" : "border-transparent"}`}
            onClick={handleClick}
        >
            ShoeCard
        </div>
    )
}

export default ShoeCard