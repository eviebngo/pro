
  # Enhance Interactivity and Accuracy

  This is a code bundle for Enhance Interactivity and Accuracy. The original project is available at https://www.figma.com/design/MN74TJK48DfKd4igRxPp6Z/Enhance-Interactivity-and-Accuracy.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Version Control & Restoring Previous Versions

  This project uses Git for version control. You can easily restore previous versions of your code.

  ### View commit history
  ```bash
  git log --oneline
  ```

  ### Restore a specific file to a previous version
  ```bash
  # See what changed in a file
  git log --oneline -- <filename>

  # Restore a file to a specific commit
  git checkout <commit-hash> -- <filename>
  ```

  ### Restore entire project to a previous commit
  ```bash
  # View all commits
  git log --oneline

  # Restore to a specific commit (creates a new branch)
  git checkout -b restore-<commit-hash> <commit-hash>

  # Or restore in place (be careful - this discards current changes)
  git reset --hard <commit-hash>
  ```

  ### Undo recent changes (before committing)
  ```bash
  # Discard changes to a specific file
  git checkout -- <filename>

  # Discard all uncommitted changes
  git reset --hard HEAD
  ```

  ### Create a new commit to save current state
  ```bash
  git add .
  git commit -m "Description of changes"
  ```

  ### Best practices
  - Commit frequently with descriptive messages
  - Use `git status` to see what files have changed
  - Use `git diff` to see what changed in files
  - Create branches for experimental changes: `git checkout -b feature-name`
  