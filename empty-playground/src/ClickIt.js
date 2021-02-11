
const ClickIt = () => {

    const clickMe = (e) => {
        console.log('Hello', e.target);
    }

    const clickMeAddProp = (name, e) => {
        console.log(`Hello ${name}!`, e.target);
    }

    return (
        <section>
            <p>(Open the console)</p>
            <button onClick={clickMe}>Write ('Hello') into the console</button>
            <button onClick={(e) => clickMeAddProp('Luna', e)}>Write ('Hello' + name) into the console</button>
        </section>
    );
}
 
export default ClickIt;