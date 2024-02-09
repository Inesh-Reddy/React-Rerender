## React Re-rendering

What exactly is re-render?

    - Anytime a final DOM manipulation happens [ayntime react actually updates the  DOM].

To visualise it we need react-developer tools.


Why do you need react ?

    - React ..creates a dynamic website [A dynamic website is whose content changes very quickly].
    - For dynamic website : Rule of thumb is to minimise no.of rerenders.

        why?

        - it makes website more efficient 

        how?

        - making sure that the static things in the website are not rendered when other dynamic things are changing/rendering.


Below code rerenders everything {not efficient one}

        function App() {
        const [title, setTitle] = useState("Inesh")

        function random(){
        const result =Math.random();
        setTitle(result);
        // return result;
        }
        return (
            <div>
            <button onClick={random}>Click Me!!</button>
            <Header title={"New Number is : "+ title}></Header><br />
            <Header title="Inesh Reddy"></Header><br />
            </div>
        )
        }

        function Header({title}){
        return <div>
            {title}
        </div>
        }

        export default App



A Re-render means that :

    - React did some work to calculate what all should update in the component.
    - The component actually got called {You can put a log}.
    - The inspoector shows you a bouding box around the component.

It happens when :

    - A state varibale that is being used inside a component changes.{if a state changes it re-renders the parent component that is App component ..so eventually it re-renders all the children}
    - A parent component re-render triggers all children re-render.


Then How Do We Stop These Unnecessary Re-Renders ?? {FIX}

Two ways to do it :


- Push the state down into particular component.


        function App() {
        return (
            <div>
            <HeaderWithButton />
            <Header title="Inesh reddy-1"></Header><br />
            <Header title="Inesh reddy-2"></Header><br />
            </div>
        )
        }

        function HeaderWithButton(){
        const [title, setTitle] = useState("Hello")

        function random(){
            const result = Math.random();
            setTitle(result);
        }
        return <div>
            <button onClick={random}>Click Me!!</button>
            <Header title={"random numner :"+ title}></Header><br />
        </div>
        
        }

        function Header({title}){
        return <div>
            {title}
        </div>
        }

        export default App

    Point to take is always keep the state vailable to the lowest common ancestor.

- Memoisation {using React.memo hook}  [https://react.dev/reference/react/memo]

    What deos it do ?

    - memo lets you skip re-rendering a component when its props are unchanged.
    - It re-renders the main App component too..but, it does not rerender static ones.


            function App() {
                const [title, setTitle] = useState("7");

                function random(){
                    const result = Math.random();
                    setTitle(result);
                }

                return (
                <div> 
                    <button onClick={random}> Click Me!!</button><br />
                    <Header title={"Random number :" + title}></Header><br />
                    <Header title={"Inesh Reddy"}></Header><br />
                    <Header title={"Inesh Reddy"}></Header><br />
                    <Header title={"Inesh Reddy"}></Header><br />
                </div>
                )
            }

            const Header = React.memo(function Header({title}){
                return <div>
                    {title}
                </div>
            })

            export default App

