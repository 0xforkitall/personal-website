export interface ISkill {
    /**
     * Id of the skill.
     */
    id: string;
    /**
     * Name of the skill.
     */
    name: string;
    /**
     * Description of the skill.
     */
    description: string;
    /**
     * Topics related to the skill.
     */
    topics: string[];
    /**
     * Color to be used for the icon background.
     */
    color: string;
}

export const skillList: ISkill[] = [
    {
        id: 'software-engineer',
        name: 'Software Engineer',
        description:
            'Skilled in designing scalable and robust software with expertise in architecture, coding, and deployment.',
        topics: ['Software architecture', 'Deployment', 'Agile methodologies', 'CI / CD'],
        color: 'accent-1',
    },
    {
        id: 'frontend-developer',
        name: 'Frontend Developer',
        description:
            'Experienced in creating immersive user experiences through intuitive interfaces and optimised performance.',
        topics: ['React', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Vercel', 'NextJs', 'Core Web Vitals'],
        color: 'accent-2',
    },
    {
        id: 'blockchain-dev',
        name: 'Blockchain Dev',
        description:
            'Passionate about blockchain technology, contributed to token launches and DeFi projects on EVM compatible chains.',
        topics: ['Web3', 'ethers.js', 'DeFi', 'WalletConnect', 'web3-react', 'dApps', 'wagmi', 'MetaMask'],
        color: 'accent-3',
    },
];
