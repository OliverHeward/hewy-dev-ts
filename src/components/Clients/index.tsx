import Title from "../Title";

const Clients: React.FC = () => {

    return (
        <section className="bg-neutral-900">
            <div className="w-11/12 mx-auto py-20">
                <Title {...{
                    className: 'font-heading uppercase text-center text-4xl text-white tracking-widest'
                }}>Clients</Title>
            </div>
        </section>
    )
}

export default Clients;