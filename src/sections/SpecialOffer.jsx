import Button from "../components/Button"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You<span className="text-coral-red"> Super Quality</span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously-crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction.</p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer