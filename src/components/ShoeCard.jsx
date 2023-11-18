const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
    return (
        <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${bigShoeImage === imgURL ? "border-coral-red" : "border-transparent"}`}>ShoeCard</div>
    )
}

export default ShoeCard