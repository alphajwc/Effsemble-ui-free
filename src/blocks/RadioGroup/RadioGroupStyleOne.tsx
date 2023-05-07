import Radio from "@/components/Radio/Radio";
import RadioGroup from "@/components/Radio/RadioGroup";

export default function RadioGroupStyleOne() {
  const handleRadioGroupChange = (value: string) => {
    alert("Radio group value changed: " + value);
  };

  return (
    <section className="break-words bg-white dark:bg-gray-800 max-sm:p-5 sm:p-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* First Radio Group */}
        <div>
          <h1 className="mb-4 text-xl font-bold">
            What is your favorite fruit?
          </h1>
          <RadioGroup defaultValue="apple" onChange={handleRadioGroupChange}>
            <div className="flex flex-wrap gap-5">
              <Radio>
                <Radio.Label>Apple</Radio.Label>
                <Radio.Button value="apple" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Banana</Radio.Label>
                <Radio.Button value="banana" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Cherry</Radio.Label>
                <Radio.Button value="cherry" className="w-4" />
              </Radio>
            </div>
          </RadioGroup>
        </div>

        {/* Second Radio Group */}
        <div>
          <h1 className="mb-4 text-xl font-bold">
            What is your favorite sport?
          </h1>
          <RadioGroup defaultValue="soccer" onChange={handleRadioGroupChange}>
            <div className="flex flex-wrap gap-5">
              <Radio>
                <Radio.Label>Soccer</Radio.Label>
                <Radio.Button value="soccer" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Basketball</Radio.Label>
                <Radio.Button value="basketball" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Tennis</Radio.Label>
                <Radio.Button value="tennis" className="w-4" />
              </Radio>
            </div>
          </RadioGroup>
        </div>

        {/* Third Radio Group */}
        <div>
          <h1 className="mb-4 text-xl font-bold">
            What is your favorite season?
          </h1>
          <RadioGroup defaultValue="summer" onChange={handleRadioGroupChange}>
            <div className="flex flex-wrap gap-5">
              <Radio>
                <Radio.Label>Summer</Radio.Label>
                <Radio.Button value="summer" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Autumn</Radio.Label>
                <Radio.Button value="autumn" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Winter</Radio.Label>
                <Radio.Button value="winter" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Spring</Radio.Label>
                <Radio.Button value="spring" className="w-4" />
              </Radio>
            </div>
          </RadioGroup>
        </div>

        {/* Fourth Radio Group */}
        <div>
          <h1 className="mb-4 text-xl font-bold">
            What is your favorite color?
          </h1>
          <RadioGroup defaultValue="red" onChange={handleRadioGroupChange}>
            <div className="flex flex-wrap gap-5">
              <Radio>
                <Radio.Label>Red</Radio.Label>
                <Radio.Button value="red" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Blue</Radio.Label>
                <Radio.Button value="blue" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Green</Radio.Label>
                <Radio.Button value="green" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Yellow</Radio.Label>
                <Radio.Button value="yellow" className="w-4" />
              </Radio>
            </div>
          </RadioGroup>
        </div>

        {/* Fifth Radio Group */}
        <div>
          <h1 className="mb-4 text-xl font-bold">
            What is your favorite genre of music?
          </h1>
          <RadioGroup defaultValue="rock" onChange={handleRadioGroupChange}>
            <div className="flex flex-wrap gap-5">
              <Radio>
                <Radio.Label>Rock</Radio.Label>
                <Radio.Button value="rock" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Pop</Radio.Label>
                <Radio.Button value="pop" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Jazz</Radio.Label>
                <Radio.Button value="jazz" className="w-4" />
              </Radio>
              <Radio>
                <Radio.Label>Classical</Radio.Label>
                <Radio.Button value="classical" className="w-4" />
              </Radio>
            </div>
          </RadioGroup>
        </div>
      </div>
    </section>
  );
}
