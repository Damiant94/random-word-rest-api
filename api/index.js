<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Random word REST API</title>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="/public/css/index.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
    

</head>
<body>
    <div class="container">
        <header class="header">
            <h1 class="welcome">Welcome to Random Word REST API</h1>
            <h2 class="description">Contains 58109 english words.</h2>
        </header>
        <div class="endpoints-wrapper">
            <div class="endpoints">
                <div class="endpoint word-endpoint">
                    <p>Get 1 random word:</p>
                    <p class="link">
                        <a href="https://random-word-rest-api.herokuapp.com/word" target="_blank" rel="noreferrer">
                            https://random-word-rest-api.herokuapp.com/word
                        </a>
                    </p>
                </div>
                <div class="endpoint random-word-with-start">
                    <p>Get 1 random word, which starts with requested <span class="string">string</span>:</p>
                    <p class="link">
                        <a href="https://random-word-rest-api.herokuapp.com/word?startsWith=a" target="_blank" rel="noreferrer">
                            https://random-word-rest-api.herokuapp.com/word?startsWith=<span class="string">string</span>
                        </a>
                    </p>
                </div>
                <div class="endpoint words-endpoint">
                    <p>Get requested <span class="number">number</span> of random words:</p>
                    <p class="link">
                        <a href="https://random-word-rest-api.herokuapp.com/words?number=10" target="_blank" rel="noreferrer">
                            https://random-word-rest-api.herokuapp.com/words?number=<span class="number">number</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="github">
                <a href="https://github.com/Damiant94/random-word-rest-api" target="_blank" rel="noreferrer">
                    <i class="fas fa-code-branch"></i> 
                    GitHub Repo
                </a>
            </div>
        </footer>
    </div>
    
</body>
</html>