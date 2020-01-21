import useSWR from "swr";

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Index() {
    const { data, error } = useSWR('/api/projects', fetcher);
    // The following lines has optional chaining added in Next.js v9
    // is the same as 'data && data.author
    let name = data?.name;
    const description = data?.description;
    const skills = data?.skills;
    const website = data?.site;
    const code = data?.code;
    const img = data?.img
    // let quote = data?.quote;

    if (!data) name = 'Loading...';
    if (error) name = 'Failed to fetch the project';

    return (
        <main className="center">
            <div className="quote">{description}</div>
            {name && <span className="author">- {name}</span>}
            <div>{skills}</div>
            <p>
                <a href={website}>{name} link</a>
                <br></br>
                {code}
                <img src={img} alt={name}></img>
            </p>

            <style jsx>{`
            main {
                width: 90%;
                max-width: 900px;
                margin: 300px auto;
                text-aligin: center;
            }
            .quote {
                font-family: cursive;
                color: #e243de;
                font-size: 24px;
                padding-bottom: 10px;
            }
            .author{
                font-family: sans-serif;
                color: #559834;
                font-size: 20px;
            }
            `}</style>
        </main>
    );
}