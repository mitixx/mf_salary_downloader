# mf_salary_downloader

MFクラウド給与明細PDFを任意の期間一括ダウンロードできます。

## 使い方

*事前にNode.jsのインストールが必要

使用前にdownloader.jsの任意の箇所を編集しご使用ください。
```
    const user = {
        'email':'',
        'pass':''
    }
```
emailとpassはMFクラウド給与請求のログイン情報を入力

```
    let month = 8 + 1 //8ヶ月+1
```

任意の期間の月を入力

```
npm i
cd mf_salary_downloader
node downloader.js
```