import { IconType } from '@shared';

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
     * Icon of the skill.
     */
    icon: IconType;
}

export const skillList: ISkill[] = [
    {
        id: 'software-engineer',
        name: 'Software Engineer',
        description:
            'Expertise in designing scalable and robust software, including architecture, coding, and deployment',
        topics: ['Software architecture', 'Deployment', 'Agile methodologies', 'CI / CD'],
        icon: IconType.CPU,
    },
    {
        id: 'frontend-developer',
        name: 'Frontend Developer',
        description:
            'Experience in creating immersive user experiences through intuitive interfaces and optimized performance.',
        topics: ['React', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Vercel', 'NextJs', 'Core Web Vitals'],
        icon: IconType.ATOM,
    },
    {
        id: 'blockchain-dev',
        name: 'Blockchain Dev',
        description:
            'Passionate about blockchain technology, I actively contributed to token launches and DeFi projects on EVM chains.',
        topics: ['Web3', 'ethers.js', 'DeFi', 'WalletConnect', 'web3-react', 'dApps', 'wagmi', 'MetaMask'],
        icon: IconType.CUBE,
    },
];
