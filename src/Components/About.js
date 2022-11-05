import useCounter from "./useCounter";

const About = () => {
    const { setValue, increment, decrement, count, reset} = useCounter()


    return (
        <>
            <div className="counter-app">

                <div className="btn-toolbar mb-3"
                        role="toolbar"
                        aria-label="Toolbar with button groups">
                        <div className="input-group">
                                <div className="input-group-text" id="btnGroupAddon">
                                    Set Value:{setValue}
                                </div>
                                <input
                                    onChange={(e) => {
                                    setValue(e);
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder="set your value"
                                    aria-label="Input group example"
                                    aria-describedby="btnGroupAddon"
                                ></input>
                        </div>
                    </div>
                
                    <div className="btn-group" role="group" aria-label="large button group">
                        <button onClick={decrement} type="button" className="btn btn-danger">DECREMENT</button>
                        <button type="button" class="btn btn-secondary">{count}</button>
                        <button onClick={increment} type="button" class="btn btn-success">INCREMENT</button>
                    <div />

                    <div className="d-grid gap-2 d-md-block">                           
                        <button  onClick={reset} type="button" class="btn btn-primary">RESET</button>
                    </div>
                    
                
                </div>

            </div>
        </>
    );
  };
  
  export default About;