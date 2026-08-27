const fs = require('fs');

const htmlContent = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/c23e31a2-c5c4-4774-87df-f97bb63c299d/.system_generated/steps/1208/content.md', 'utf-8');

// Extract only the Pre-Final Years section
const startIndex = htmlContent.indexOf('<h3>Pre-Final Years</h3>');
let endIndex = htmlContent.indexOf('<h3>Second Years</h3>', startIndex);
if (endIndex === -1) {
  endIndex = htmlContent.length;
}

const preFinalContent = htmlContent.slice(startIndex, endIndex);

const memberRegex = /<article class="team__member">[\s\S]*?<img src="([^"]+)" alt="[^"]*">[\s\S]*?<h4>([^<]+)<\/h4>[\s\S]*?<p>([^<]+(?:<br>[^<]+)*)<\/p>[\s\S]*?<\/article>/g;

const team = [];
let match;

while ((match = memberRegex.exec(preFinalContent)) !== null) {
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

// Extracted only the Pre-Final year students (now Final Years / Leaders)
export const TEAM_LEADERS: TeamMember[] = ${JSON.stringify(team, null, 2)};
`;

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/team_leaders.ts', tsContent);
console.log(`Successfully extracted ${team.length} pre-final year members to src/data/team_leaders.ts`);
