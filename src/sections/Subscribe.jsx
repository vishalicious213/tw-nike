import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center gap-10 max-lg:flex-col">
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold lg:max-w-md ">Sign Up For <span className="text-coral-red">Updates</span> & Newsletter</h3>
      
      <div className="w-full flex items-center gap-5 p-2.5 lg:max-w-[40%] max-sm:flex-col sm:border sm:border-slate-gray rounded-full">
        <input type="text" className="input" placeholder="subscribe@nike.com"></input>
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe