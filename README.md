# GitHub Actions Playground

GitHub Actions の各機能を実際に動かして学ぶための学習用リポジトリです。

## アプリ構成

Express ベースの REST API アプリ（数学計算・文字列操作）+ Jest テスト

```
├── src/
│   ├── app.js            # Express アプリ本体
│   ├── index.js           # サーバー起動
│   ├── math.js            # 数学ユーティリティ
│   └── string-utils.js    # 文字列ユーティリティ
├── tests/                 # Jest テスト
├── scripts/               # ビルドスクリプト
└── .github/
    ├── workflows/         # GitHub Actions ワークフロー (12本)
    └── actions/           # カスタムアクション
```

## セットアップ

```bash
npm install    # 依存インストール
npm test       # テスト実行
npm start      # サーバー起動 (localhost:3000)
npm run lint   # リント実行
```

---

## ワークフロー一覧

| # | ファイル | トリガー | 学べること |
|---|---------|---------|-----------|
| 01 | `01-basic-ci.yml` | push, PR | CI の基本 (checkout, setup-node, テスト, リント) |
| 02 | `02-matrix-build.yml` | push, PR | `strategy.matrix` で複数 OS × Node バージョンの並列テスト |
| 03 | `03-manual-trigger.yml` | 手動 | `workflow_dispatch` + `inputs` (choice, boolean, string) |
| 04 | `04-schedule-cron.yml` | cron / 手動 | `schedule` による定期実行、cron 式の書き方 |
| 05 | `05-cache.yml` | push, PR | `actions/cache` と `setup-node` の cache オプション |
| 06 | `06-artifacts.yml` | push / 手動 | `upload-artifact` / `download-artifact` でジョブ間共有 |
| 07 | `07-env-and-secrets.yml` | 手動 | `env`, `secrets`, `GITHUB_ENV`, `GITHUB_OUTPUT`, github コンテキスト |
| 08 | `08-deploy-pages.yml` | push / 手動 | GitHub Pages デプロイ、`permissions`, `concurrency` |
| 09 | `09-reusable-workflow.yml` / `09-caller.yml` | 手動 | `workflow_call` で再利用可能なワークフロー |
| 10 | `10-custom-action.yml` | 手動 | ローカル Composite Action の作成と利用 |
| 11 | `11-conditional-paths.yml` | push (src 変更時) | `paths`, `if`, `success()`, `failure()`, `always()`, `continue-on-error` |
| 12 | `12-job-dependencies.yml` | 手動 | `needs` による依存関係、並列/直列ジョブ、outputs の受け渡し |

## 学習の進め方

### Step 1: GitHub にリポジトリを作成して push

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create githubActionTest --public --source=. --push
```

### Step 2: 自動で動くワークフローを確認

push すると **01 (Basic CI)**, **02 (Matrix)**, **05 (Cache)**, **11 (Conditional)** が自動実行されます。
GitHub の **Actions** タブでログを確認しましょう。

### Step 3: 手動ワークフローを試す

Actions タブから **03, 07, 09b, 10, 12** を手動実行 (`Run workflow`) できます。
特に **03 (Manual Trigger)** はパラメータを入力して動作を変えられます。

### Step 4: 改造して実験

- ワークフローを編集してわざとテストを失敗させる
- matrix に新しい Node バージョンを追加する
- 新しいステップやジョブを追加する
- secrets を設定して 07 で確認する
- GitHub Pages を有効化して 08 をデプロイする

## シークレットの設定方法

**07-env-and-secrets.yml** で使うシークレットを設定するには:

1. GitHub リポジトリの **Settings** > **Secrets and variables** > **Actions**
2. **New repository secret** をクリック
3. Name: `MY_SECRET`, Value: 任意の値を入力
