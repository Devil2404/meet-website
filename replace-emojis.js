const fs = require('fs');
const path = require('path');

const emojiMap = {
  '📞': 'Phone',
  '🎓': 'GraduationCap',
  '🚀': 'Rocket',
  '🌍': 'Globe',
  '🎙': 'Mic',
  '🎙️': 'Mic',
  '📋': 'ClipboardList',
  '💬': 'MessageSquare',
  '📅': 'Calendar',
  '🎨': 'Palette',
  '⚙': 'Settings',
  '⚙️': 'Settings',
  '📊': 'BarChart',
  '❌': 'XCircle',
  '✅': 'CheckCircle2',
  '📌': 'Pin',
  '🎯': 'Target',
  '⚠': 'AlertTriangle',
  '⚠️': 'AlertTriangle',
  '🏆': 'Trophy',
  '🖥': 'Monitor',
  '🖥️': 'Monitor',
  '🎬': 'Clapperboard',
  '⏱': 'Clock',
  '⏱️': 'Clock',
  '💼': 'Briefcase',
  '💡': 'Lightbulb'
};

const colorMap = {
  'XCircle': 'text-red-400',
  'CheckCircle2': 'text-emerald-400',
  'AlertTriangle': 'text-yellow-400'
};

const filesToUpdate = [
  'app/blog/best-free-google-meet-recorder/page.tsx',
  'app/blog/best-meeting-productivity-tools/page.tsx',
  'app/blog/generate-action-items-from-meetings/page.tsx',
  'app/blog/how-to-improve-team-meetings/page.tsx',
  'app/blog/how-to-take-meeting-notes-automatically/page.tsx',
  'app/blog/record-google-meet-without-workspace/page.tsx',
  'app/blog/track-attendance-google-meet/page.tsx'
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let usedIcons = new Set();
  
  for (const [emoji, iconName] of Object.entries(emojiMap)) {
    if (content.includes(emoji)) {
      usedIcons.add(iconName);
      const colorClass = colorMap[iconName] || 'text-voxa-purple';
      const regex = new RegExp(emoji + '\\\\s?', 'g');
      content = content.replace(regex, '<' + iconName + ' className="inline w-5 h-5 ' + colorClass + ' mr-2 -mt-0.5" />');
    }
  }
  
  if (usedIcons.size > 0) {
    const importStatement = "import { " + Array.from(usedIcons).join(', ') + " } from 'lucide-react';\\n";
    
    if (content.includes("'lucide-react'")) {
      let lines = content.split('\\n');
      let lastImportIndex = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          lastImportIndex = i;
        }
      }
      lines.splice(lastImportIndex + 1, 0, importStatement);
      content = lines.join('\\n');
    } else {
      let lines = content.split('\\n');
      let firstImportIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          firstImportIndex = i;
          break;
        }
      }
      lines.splice(firstImportIndex, 0, importStatement);
      content = lines.join('\\n');
    }
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Updated ' + file + ' with ' + Array.from(usedIcons).join(', '));
  }
});
