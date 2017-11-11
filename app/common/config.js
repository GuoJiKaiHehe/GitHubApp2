
export const ThemeFlags = {
    Default:'#4caf50',
    Red: '#F44336',
    Pink:'#E91E63',
    Purple:'#9C27B0',
    DeepPurple:'#673AB7',
    Indigo:'#3F51B5',
    Blue:'#2196F3',
    LightBlue:'#03A9F4',
    Cyan:'#00BCD4',
    Teal:'#009688',
    Green:'#4CAF50',
    LightGreen:'#8BC34A',
    Lime:'#CDDC39',
    Yellow:'#FFEB3B',
    Amber:'#FFC107',
    Orange:'#FF9800',
    DeepOrange:'#FF5722',
    Brown:'#795548',
    Grey:'#9E9E9E',
    BlueGrey:'#607D8B',
    Black:'#000000'
}

export let apis={
    get_repositories:'https://api.github.com/search/repositories', // query : ?q=js&sort=stars
    get_trendings:'https://github.com/trending/'
};

export let header={
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }  
};

export let cacheTime=1000*60*5; //一分钟

export var languages=[
  {
    "path": "",
    "name": "All Language",
    "short_name": "All",
    "checked": true
  },
  {
    "path": "unknown",
    "name": "Unknown",
    "checked": false
  },
  {
    "path": "as3",
    "name": "ActionScript",
    "short_name": "AS",
    "checked": true
  },
  {
    "path": "apacheconf",
    "name": "ApacheConf",
    "checked": true
  },
  {
    "path": "nasm",
    "name": "Assembly",
    "short_name": "NASM",
    "checked": false
  },
  {
    "path": "bat",
    "name": "Batchfile",
    "short_name": "BAT",
    "checked": false
  },
  {
    "path": "c",
    "name": "C",
    "checked": false
  },
  {
    "path": "csharp",
    "name": "C#",
    "checked": false
  },
  {
    "path": "cpp",
    "name": "C++",
    "checked": false
  },
  {
    "path": "cmake",
    "name": "CMake",
    "checked": false
  },
  {
    "path": "css",
    "name": "CSS",
    "checked": false
  },
  {
    "path": "clojure",
    "name": "Clojure",
    "checked": false
  },
  {
    "path": "coffeescript",
    "name": "CoffeeScript",
    "checked": false
  },
  {
    "path": "common-lisp",
    "short_name": "Lisp",
    "name": "Common Lisp",
    "checked": false
  },
  {
    "path": "crystal",
    "name": "Crystal",
    "checked": false
  },
  {
    "path": "d",
    "name": "D",
    "checked": false
  },
  {
    "path": "dart",
    "name": "Dart",
    "checked": false
  },
  {
    "path": "elixir",
    "name": "Elixir",
    "checked": false
  },
  {
    "path": "emacs-lisp",
    "short_name": "Lisp",
    "name": "Emacs Lisp",
    "checked": false
  },
  {
    "path": "erlang",
    "name": "Erlang",
    "checked": false
  },
  {
    "path": "fsharp",
    "name": "F#",
    "checked": false
  },
  {
    "path": "game-maker-language",
    "short_name": "GML",
    "name": "Game Maker Language",
    "checked": false
  },
  {
    "path": "go",
    "name": "Go",
    "checked": false
  },
  {
    "path": "groovy",
    "name": "Groovy",
    "checked": false
  },
  {
    "path": "html",
    "name": "HTML",
    "checked": false
  },
  {
    "path": "haskell",
    "name": "Haskell",
    "checked": false
  },
  {
    "path": "haxe",
    "name": "Haxe",
    "checked": false
  },
  {
    "path": "inno-setup",
    "short_name": "Inno",
    "name": "Inno Setup",
    "checked": false
  },
  {
    "path": "java",
    "name": "Java",
    "checked": false
  },
  {
    "path": "javascript",
    "short_name": "JS",
    "name": "JavaScript",
    "checked": false
  },
  {
    "path": "julia",
    "name": "Julia",
    "checked": false
  },
  {
    "path": "kotlin",
    "name": "Kotlin",
    "checked": false
  },
  {
    "path": "livescript",
    "short_name": "LS",
    "name": "LiveScript",
    "checked": false
  },
  {
    "path": "lua",
    "name": "Lua",
    "checked": false
  },
  {
    "path": "makefile",
    "name": "Makefile",
    "checked": false
  },
  {
    "path": "matlab",
    "name": "Matlab",
    "checked": false
  },
  {
    "path": "nsis",
    "name": "NSIS",
    "checked": false
  },
  {
    "path": "nimrod",
    "name": "Nimrod",
    "checked": false
  },
  {
    "path": "ocaml",
    "name": "OCaml",
    "checked": false
  },
  {
    "short_name": "Obj-C",
    "path": "objective-c",
    "name": "Objective-C",
    "checked": false
  },
  {
    "short_name": "Obj-C++",
    "path": "objective-c%2B%2B",
    "name": "Objective-C++",
    "checked": false
  },
  {
    "path": "php",
    "name": "PHP",
    "checked": false
  },
  {
    "path": "plsql",
    "name": "PLSQL",
    "checked": false
  },
  {
    "path": "pascal",
    "name": "Pascal",
    "checked": false
  },
  {
    "path": "perl",
    "name": "Perl",
    "checked": false
  },
  {
    "path": "postscript",
    "name": "PostScript",
    "checked": false
  },
  {
    "path": "powershell",
    "name": "PowerShell",
    "checked": false
  },
  {
    "path": "python",
    "name": "Python",
    "checked": false
  },
  {
    "path": "qml",
    "name": "QML",
    "checked": false
  },
  {
    "path": "r",
    "name": "R",
    "checked": false
  },
  {
    "path": "ruby",
    "name": "Ruby",
    "checked": false
  },
  {
    "path": "rust",
    "name": "Rust",
    "checked": false
  },
  {
    "path": "scala",
    "name": "Scala",
    "checked": false
  },
  {
    "path": "scheme",
    "name": "Scheme",
    "checked": false
  },
  {
    "path": "bash",
    "name": "Shell",
    "checked": false
  },
  {
    "path": "supercollider",
    "name": "SuperCollider",
    "checked": false
  },
  {
    "path": "swift",
    "name": "Swift",
    "checked": false
  },
  {
    "path": "tex",
    "name": "TeX",
    "checked": false
  },
  {
    "path": "typescript",
    "name": "TypeScript",
    "checked": false
  },
  {
    "path": "verilog",
    "name": "Verilog",
    "checked": false
  },
  {
    "path": "xslt",
    "name": "XSLT",
    "checked": false
  }
]