// src/App.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            <Main />
        </div>
    );
};

const Sidebar = () => {
    const [branches, setBranches] = useState<string[]>([]);

    useEffect(() => {
        // 替換成你的 GitHub Repository API
        axios
            .get('https://api.github.com/repos/a4-acker/reactproject3/branches')
            .then((res) => setBranches(res.data.map((branch: any) => branch.name)))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div style={{ width: '20%', borderRight: '1px solid #ddd', padding: '1rem' }}>
            <h3>Branches</h3>
            <ul>
                {branches.map((branch) => (
                    <li key={branch}>
                        {/* 點擊分支時傳遞分支名稱作為 query 參數 */}
                        <a href={`?branch=${branch}`}>{branch}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Main = () => {
    const [branch, setBranch] = useState<string | null>(null);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        setBranch(query.get('branch'));
    }, [window.location.search]);

    return (
        <div style={{ flex: 1, padding: '1rem' }}>
            {branch ? (
                <iframe
                    src={`https://<username>.github.io/<repo>/${branch}/`}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                />
            ) : (
                <div>Select a branch to view its GitHub Pages</div>
            )}
        </div>
    );
};

export default App;
