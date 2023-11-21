import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price, rating }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
            
            <div className="mt-8 flex justify-start gap-2 5">
                <img src={star} alt="rating" width={24} height={24} />
                <p>{rating}</p>
            </div>
        </div>

    )
}

export default PopularProductCard