const fs = require('fs');

const htmlContent = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/c23e31a2-c5c4-4774-87df-f97bb63c299d/.system_generated/steps/1208/content.md', 'utf-8');

// Regex to find members
const memberRegex = /<article class="team__member">[\s\S]*?<img src="([^"]+)" alt="[^"]*">[\s\S]*?<h4>([^<]+)<\/h4>[\s\S]*?<p>([^<]+(?:<br>[^<]+)*)<\/p>[\s\S]*?<\/article>/g;

const team = [];
let match;

while ((match = memberRegex.exec(htmlContent)) !== null) {
  const [_, image, name, rawRole] = match;
  
  const role = rawRole.replace(/<br>/g, ' - ').trim();
  const cleanName = name.trim();
  const cleanImage = image.trim();

  team.push({
    name: cleanName,
    role: role,
    image: `https://veerracersselectric.netlify.app/${cleanImage}`
  });
}

const tsContent = `export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = ${JSON.stringify(team, null, 2)};
`;

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/team.ts', tsContent);
console.log(`Successfully extracted ${team.length} members to src/data/team.ts`);
