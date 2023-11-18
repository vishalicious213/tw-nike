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
            <div>
                <img src={imgURL.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain" />
            </div>
        </div>
    )
}

export default ShoeCard