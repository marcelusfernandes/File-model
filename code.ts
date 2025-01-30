// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// Create pages with specific names and symbols
var pageStructure = [
    { name: "⬓ ・About", group: "INTRO" },
    { name: "--------------", group: "INTRO" },
    { name: "◉ HANDOFF", group: "HANDOFF" },
    { name: "✓ ・ V 1.0 - 04/12/2024", group: "HANDOFF" },
    { name: "--------------", group: "DESIGN" },
    { name: "◉ DESIGN PROCESS", group: "DESIGN" },
    { name: "☆ ・ Discovery", group: "DESIGN PROCESS" },
    { name: "☀ ・ Benchmark", group: "DESIGN PROCESS" },
    { name: "✐ ・ Exploration", group: "DESIGN PROCESS" },
    { name: "◆ ・ Work Page", group: "DESIGN PROCESS" },
    { name: "▶︎ ・ Prototype", group: "DESIGN PROCESS" },
    { name: "--------------", group: "ARCHIVE" },
    { name: "◉ OTHERS", group: "ARCHIVE" },
    { name: "❐  ・ Achived", group: "ARCHIVE" },
    { name: "⇠ ・ History Versions", group: "ARCHIVE" },
    { name: "❖ ・ Local Components", group: "ARCHIVE" },
    { name: "◇ ・ Doc Components", group: "ARCHIVE" }
];

// Rename "Page 1" to first page in structure
figma.root.children[0].name = pageStructure[0].name;

// Create the rest of the pages starting from index 1
for (let i = 1; i < pageStructure.length; i++) {
    const newPage = figma.createPage();
    newPage.name = pageStructure[i].name;
}

// Close the plugin
figma.closePlugin();
