import s from "./weather_form.module.scss"

const WeatherForm = (props) => {
    return(
        <div className={s.weather_form}>
            <article className={s.weather_block}>
                <h1 className={s.weather_explanation}>
                    {props.firstHeadline}
                </h1>
                <h2 ref={props.cityRef} className={s.weather_in_your_city}>
                    {props.secondHeadline}
                </h2>
                <input onChange={(e)=>{props.changeCity(e.target.value)}} ref={props.inputRef} type="text" name="" id=""/>
            </article>
            <button onClick={props.getWheather} ref={props.btnRef} className={s.weather_btn}>Find</button>
        </div>
    )
};

export default WeatherForm;