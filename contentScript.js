function init() {
  const styles = `
  #protime-container {
    min-width: 300px;
    min-height: 150px;
    margin: 0;
    position: fixed;
    padding: 10px;
    background: transparent;
    white-space: nowrap;
    display: inline-block;
    cursor: move;
    border-radius: 4px;
    transition: 0.3s;
  
    &:hover {
      border: 1px dashed black;
    }
  }
  .resizer {
    display: flex;
    margin: 0;
    padding: 0;
    resize: both;
    overflow: hidden;
  }
  .resizer > .resized {
    flex-grow: 1;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .close-extension-container {
    display: flex;
    justify-content: end;
    padding-block: 5px;
  }
  .close-extension {
    cursor: pointer;
    color: black;
    visibility: hidden;
  }
  #protime-container:hover {
    .close-extension {
      visibility: visible;
    }
  }
  @media (prefers-color-scheme: dark) {
    #protime-container {
      &:hover {
        border: 1px dashed white;
      }
    }
    .close-extension {
      color: white;
    }
  }

  .container {
           /* Pillar width */
           width: 50px;
           height:18rem;
            background-color: #e6e6e6; /* Light gray background for the empty pillar */
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            border: 2px solid #f57f01; /* Border matching the brand color */
            margin-bottom: 20px;
        }

        .pillar {
            width: 50px;
            height: 100%;
            background-color: #f57f01; /* Brand orange color for the filling pillar */
            position: absolute;
            bottom: -100%;
            animation: breathe 10s infinite;
        }

        @keyframes breathe {
            0%, 100% {
                bottom: -100%;
            }
            40% { /* Inhale for 4 seconds (40% of 10s) */
                bottom: 0;
            }
            100% { /* Exhale for 6 seconds (remaining 60% of 10s) */
                bottom: -100%;
            }
        }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.setAttribute("id", "protime-extension-styles");
  styleSheet.innerText = styles;
  const injectelement = document.createElement("div");
  injectelement.setAttribute("id", "protime-container");
  injectelement.setAttribute("draggable", "true");
  injectelement.style.minWidth = "300px";
  injectelement.style.minHeight = "150px";
  injectelement.style.position = "fixed";
  injectelement.style.top = "0";
  // injectelement.style.left = "0";
  injectelement.style.zIndex = "99999";
  injectelement.style.padding = "10px";
  injectelement.style.background = "transparent";
  injectelement.style.whiteSpace = "nowrap";
  injectelement.style.display = "inline-block";
  injectelement.style.cursor = "move";
  injectelement.style.borderRadius = "4px";
  //   injectelement.style
  injectelement.innerHTML = `
  <div class="close-extension-container"><button id="extension-close-button" class="close-extension">X</button></div>
  <div class="resizer">
      <div class="container">
        <div class="pillar"></div>
    </div>
    </div>
  `;
  document.head.appendChild(styleSheet);
  document.body.appendChild(injectelement);
}

init();
