## Objects

<dl>
<dt><a href="#ala">ala</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#bytes">bytes</a> : <code>Buffer</code> | <code>hex</code></dt>
<dd></dd>
<dt><a href="#getCodeResult">getCodeResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getCodeHashResult">getCodeHashResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getAbiResult">getAbiResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getRawCodeAndAbiResult">getRawCodeAndAbiResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#abiJsonToBinResult">abiJsonToBinResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#abiBinToJsonResult">abiBinToJsonResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getTableRowsResult">getTableRowsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getCurrencyStatsResult">getCurrencyStatsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getProducersResult">getProducersResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getProducerScheduleResult">getProducerScheduleResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getScheduledTransactionsResult">getScheduledTransactionsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#pushBlockResult">pushBlockResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#pushTransactionResult">pushTransactionResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getActionsResult">getActionsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getTransactionResult">getTransactionResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getKeyAccountsResult">getKeyAccountsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getControlledAccountsResult">getControlledAccountsResult</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="ala"></a>

## ala : <code>object</code>
**Kind**: global namespace  

* [ala](#ala) : <code>object</code>
    * [.getInfo()](#ala.getInfo) ⇒ <code>string</code>
    * [.getAccount(account_name)](#ala.getAccount) ⇒ <code>string</code>
    * [.getCode(account_name, [code_as_wasm])](#ala.getCode) ⇒ [<code>getCodeResult</code>](#getCodeResult)
    * [.getCodeHash(account_name)](#ala.getCodeHash) ⇒ [<code>getCodeHashResult</code>](#getCodeHashResult)
    * [.getAbi(account_name)](#ala.getAbi) ⇒ [<code>getAbiResult</code>](#getAbiResult)
    * [.getRawCodeAndAbi(account_name)](#ala.getRawCodeAndAbi) ⇒ [<code>getRawCodeAndAbiResult</code>](#getRawCodeAndAbiResult)
    * [.abiJsonToBin(code, action, args)](#ala.abiJsonToBin) ⇒ [<code>abiJsonToBinResult</code>](#abiJsonToBinResult)
    * [.abiBinToJson(code, action, binargs)](#ala.abiBinToJson) ⇒ [<code>abiBinToJsonResult</code>](#abiBinToJsonResult)
    * [.getRequiredKeys(transaction, available_keys)](#ala.getRequiredKeys) ⇒ <code>Set.&lt;public_key&gt;</code>
    * [.getBlock(block_num_or_id)](#ala.getBlock) ⇒ <code>variant</code>
    * [.getBlockHeaderState(block_num_or_id)](#ala.getBlockHeaderState) ⇒ <code>string</code>
    * [.getTableRows([json], code, scope, table, table_key, [lower_bound], [upper_bound], [limit], key_type, index_position)](#ala.getTableRows) ⇒ [<code>getTableRowsResult</code>](#getTableRowsResult)
    * [.getCurrencyBalance(code, account, symbol)](#ala.getCurrencyBalance) ⇒ <code>Array.&lt;asset&gt;</code>
    * [.getCurrencyStats(code, symbol)](#ala.getCurrencyStats) ⇒ [<code>getCurrencyStatsResult</code>](#getCurrencyStatsResult)
    * [.getProducers([json], lower_bound, [limit])](#ala.getProducers) ⇒ [<code>getProducersResult</code>](#getProducersResult)
    * [.getProducerSchedule()](#ala.getProducerSchedule) ⇒ [<code>getProducerScheduleResult</code>](#getProducerScheduleResult)
    * [.getScheduledTransactions([json], lower_bound, [limit])](#ala.getScheduledTransactions) ⇒ [<code>getScheduledTransactionsResult</code>](#getScheduledTransactionsResult)
    * [.pushBlock(block)](#ala.pushBlock)
    * [.pushTransaction(signed_transaction)](#ala.pushTransaction) ⇒ [<code>pushTransactionResult</code>](#pushTransactionResult)
    * [.pushTransactions(signed_transaction)](#ala.pushTransactions) ⇒ <code>vector.&lt;push_transaction.results&gt;</code>
    * [.getActions(account_name, [pos], [offset])](#ala.getActions) ⇒ [<code>getActionsResult</code>](#getActionsResult)
    * [.getTransaction(id, [block_num_hint])](#ala.getTransaction) ⇒ [<code>getTransactionResult</code>](#getTransactionResult)
    * [.getKeyAccounts(public_key)](#ala.getKeyAccounts) ⇒ [<code>getKeyAccountsResult</code>](#getKeyAccountsResult)
    * [.getControlledAccounts(controlling_account)](#ala.getControlledAccounts) ⇒ [<code>getControlledAccountsResult</code>](#getControlledAccountsResult)

<a name="ala.getInfo"></a>

### ala.getInfo() ⇒ <code>string</code>
Return general network information.

**Kind**: static method of [<code>ala</code>](#ala)  
**Example**  
```js
url_path: `/v1/chain/get_info`
```
**Example**  
```js
ala.getInfo({})
```
<a name="ala.getAccount"></a>

### ala.getAccount(account_name) ⇒ <code>string</code>
Fetch a blockchain account

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_account`
```
**Example**  
```js
ala.getAccount(account_name)
```
<a name="ala.getCode"></a>

### ala.getCode(account_name, [code_as_wasm]) ⇒ [<code>getCodeResult</code>](#getCodeResult)
Fetch smart contract code

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type | Default |
| --- | --- | --- |
| account_name | <code>name</code> |  | 
| [code_as_wasm] | <code>bool</code> | <code>false</code> | 

**Example**  
```js
url_path: `/v1/chain/get_code`
```
**Example**  
```js
ala.getCode(account_name, code_as_wasm)
```
<a name="ala.getCodeHash"></a>

### ala.getCodeHash(account_name) ⇒ [<code>getCodeHashResult</code>](#getCodeHashResult)
**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_code_hash`
```
**Example**  
```js
ala.getCodeHash(account_name)
```
<a name="ala.getAbi"></a>

### ala.getAbi(account_name) ⇒ [<code>getAbiResult</code>](#getAbiResult)
**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_abi`
```
**Example**  
```js
ala.getAbi(account_name)
```
<a name="ala.getRawCodeAndAbi"></a>

### ala.getRawCodeAndAbi(account_name) ⇒ [<code>getRawCodeAndAbiResult</code>](#getRawCodeAndAbiResult)
**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_raw_code_and_abi`
```
**Example**  
```js
ala.getRawCodeAndAbi(account_name)
```
<a name="ala.abiJsonToBin"></a>

### ala.abiJsonToBin(code, action, args) ⇒ [<code>abiJsonToBinResult</code>](#abiJsonToBinResult)
Manually serialize json into binary hex.  The binayargs is usually stored in Action.data.

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| action | <code>name</code> | 
| args | [<code>bytes</code>](#bytes) | 

**Example**  
```js
url_path: `/v1/chain/abi_json_to_bin`
```
**Example**  
```js
ala.abiJsonToBin(code, action, args)
```
<a name="ala.abiBinToJson"></a>

### ala.abiBinToJson(code, action, binargs) ⇒ [<code>abiBinToJsonResult</code>](#abiBinToJsonResult)
Convert bin hex back into Abi json definition.

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| action | <code>name</code> | 
| binargs | [<code>bytes</code>](#bytes) | 

**Example**  
```js
url_path: `/v1/chain/abi_bin_to_json`
```
**Example**  
```js
ala.abiBinToJson(code, action, binargs)
```
<a name="ala.getRequiredKeys"></a>

### ala.getRequiredKeys(transaction, available_keys) ⇒ <code>Set.&lt;public_key&gt;</code>
**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| transaction | <code>transaction</code> | 
| available_keys | <code>set.&lt;public_key&gt;</code> | 

**Example**  
```js
url_path: `/v1/chain/get_required_keys`
```
**Example**  
```js
ala.getRequiredKeys(transaction, available_keys)
```
<a name="ala.getBlock"></a>

### ala.getBlock(block_num_or_id) ⇒ <code>variant</code>
Fetch a block from the blockchain.

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| block_num_or_id | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_block`
```
**Example**  
```js
ala.getBlock(block_num_or_id)
```
<a name="ala.getBlockHeaderState"></a>

### ala.getBlockHeaderState(block_num_or_id) ⇒ <code>string</code>
Fetch the minimum state necessary to validate transaction headers.

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| block_num_or_id | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_block_header_state`
```
**Example**  
```js
ala.getBlockHeaderState(block_num_or_id)
```
<a name="ala.getTableRows"></a>

### ala.getTableRows([json], code, scope, table, table_key, [lower_bound], [upper_bound], [limit], key_type, index_position) ⇒ [<code>getTableRowsResult</code>](#getTableRowsResult)
Fetch smart contract data from an account.

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> |  |
| code | <code>name</code> |  |  |
| scope | <code>string</code> |  |  |
| table | <code>name</code> |  |  |
| table_key | <code>string</code> |  |  |
| [lower_bound] | <code>string</code> | <code>0</code> |  |
| [upper_bound] | <code>string</code> | <code>-1</code> |  |
| [limit] | <code>uint32</code> | <code>10</code> |  |
| key_type | <code>string</code> |  | The key type of --index, primary only supports (i64), all others support (i64, i128, i256, float64, float128). Special type 'name' indicates an account name. |
| index_position | <code>string</code> |  | 1 - primary (first), 2 - secondary index (in order defined by multi_index), 3 - third index, etc |

**Example**  
```js
url_path: `/v1/chain/get_table_rows`
```
**Example**  
```js
ala.getTableRows(json, code, scope, table, table_key, lower_bound, upper_bound, limit, key_type, index_position)
```
<a name="ala.getCurrencyBalance"></a>

### ala.getCurrencyBalance(code, account, symbol) ⇒ <code>Array.&lt;asset&gt;</code>
**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| account | <code>name</code> | 
| symbol | <code>optional.&lt;string&gt;</code> | 

**Example**  
```js
url_path: `/v1/chain/get_currency_balance`
```
**Example**  
```js
ala.getCurrencyBalance(code, account, symbol)
```
<a name="ala.getCurrencyStats"></a>

### ala.getCurrencyStats(code, symbol) ⇒ [<code>getCurrencyStatsResult</code>](#getCurrencyStatsResult)
**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| symbol | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_currency_stats`
```
**Example**  
```js
ala.getCurrencyStats(code, symbol)
```
<a name="ala.getProducers"></a>

### ala.getProducers([json], lower_bound, [limit]) ⇒ [<code>getProducersResult</code>](#getProducersResult)
Fetch smart contract data from producer.

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type | Default |
| --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> | 
| lower_bound | <code>string</code> |  | 
| [limit] | <code>uint32</code> | <code>50</code> | 

**Example**  
```js
url_path: `/v1/chain/get_producers`
```
**Example**  
```js
ala.getProducers(json, lower_bound, limit)
```
<a name="ala.getProducerSchedule"></a>

### ala.getProducerSchedule() ⇒ [<code>getProducerScheduleResult</code>](#getProducerScheduleResult)
**Kind**: static method of [<code>ala</code>](#ala)  
**Example**  
```js
url_path: `/v1/chain/get_producer_schedule`
```
**Example**  
```js
ala.getProducerSchedule()
```
<a name="ala.getScheduledTransactions"></a>

### ala.getScheduledTransactions([json], lower_bound, [limit]) ⇒ [<code>getScheduledTransactionsResult</code>](#getScheduledTransactionsResult)
**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> |  |
| lower_bound | <code>string</code> |  | timestamp OR transaction ID |
| [limit] | <code>uint32</code> | <code>50</code> |  |

**Example**  
```js
url_path: `/v1/chain/get_scheduled_transactions`
```
**Example**  
```js
ala.getScheduledTransactions(json, lower_bound, limit)
```
<a name="ala.pushBlock"></a>

### ala.pushBlock(block)
Append a block to the chain database.

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| block | <code>signed_block</code> | 

**Example**  
```js
url_path: `/v1/chain/push_block`
```
**Example**  
```js
ala.pushBlock(block)
```
<a name="ala.pushTransaction"></a>

### ala.pushTransaction(signed_transaction) ⇒ [<code>pushTransactionResult</code>](#pushTransactionResult)
Attempts to push the transaction into the pending queue.

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| signed_transaction | <code>signed_transaction</code> | 

**Example**  
```js
url_path: `/v1/chain/push_transaction`
```
**Example**  
```js
ala.pushTransaction(signed_transaction)
```
<a name="ala.pushTransactions"></a>

### ala.pushTransactions(signed_transaction) ⇒ <code>vector.&lt;push_transaction.results&gt;</code>
Attempts to push transactions into the pending queue.

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| signed_transaction | <code>signed_transaction</code> | 

**Example**  
```js
url_path: `/v1/chain/push_transactions`
```
**Example**  
```js
ala.pushTransactions(signed_transaction)
```
<a name="ala.getActions"></a>

### ala.getActions(account_name, [pos], [offset]) ⇒ [<code>getActionsResult</code>](#getActionsResult)
**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type | Description |
| --- | --- | --- |
| account_name | <code>account_name</code> |  |
| [pos] | <code>int32</code> | An absolute sequence positon -1 is the end/last action |
| [offset] | <code>int32</code> | The number of actions relative to pos, negative numbers return [pos-offset,pos), positive numbers return [pos,pos+offset) |

**Example**  
```js
url_path: `/v1/history/get_actions`
```
**Example**  
```js
ala.getActions(account_name, pos, offset)
```
<a name="ala.getTransaction"></a>

### ala.getTransaction(id, [block_num_hint]) ⇒ [<code>getTransactionResult</code>](#getTransactionResult)
Retrieve a transaction from the blockchain.

**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>transaction_id_type</code> |  |  |
| [block_num_hint] | <code>uint32</code> | <code>0</code> | A non-zero block number allows shorter transaction IDs (8 hex, 4 bytes) |

**Example**  
```js
url_path: `/v1/history/get_transaction`
```
**Example**  
```js
ala.getTransaction(id, block_num_hint)
```
<a name="ala.getKeyAccounts"></a>

### ala.getKeyAccounts(public_key) ⇒ [<code>getKeyAccountsResult</code>](#getKeyAccountsResult)
**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| public_key | <code>public_key_type</code> | 

**Example**  
```js
url_path: `/v1/history/get_key_accounts`
```
**Example**  
```js
ala.getKeyAccounts(public_key)
```
<a name="ala.getControlledAccounts"></a>

### ala.getControlledAccounts(controlling_account) ⇒ [<code>getControlledAccountsResult</code>](#getControlledAccountsResult)
**Kind**: static method of [<code>ala</code>](#ala)  

| Param | Type |
| --- | --- |
| controlling_account | <code>account_name</code> | 

**Example**  
```js
url_path: `/v1/history/get_controlled_accounts`
```
**Example**  
```js
ala.getControlledAccounts(controlling_account)
```
<a name="bytes"></a>

## bytes : <code>Buffer</code> \| <code>hex</code>
**Kind**: global typedef  
<a name="getCodeResult"></a>

## getCodeResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| wast | <code>string</code> | 
| wasm | <code>string</code> | 
| code_hash | <code>sha256</code> | 
| abi | <code>optional.&lt;abi_def&gt;</code> | 

<a name="getCodeHashResult"></a>

## getCodeHashResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| code_hash | <code>sha256</code> | 

<a name="getAbiResult"></a>

## getAbiResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| [abi] | <code>abi_def</code> | 

<a name="getRawCodeAndAbiResult"></a>

## getRawCodeAndAbiResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| wasm | [<code>bytes</code>](#bytes) | 
| [abi] | <code>abi_def</code> | 

<a name="abiJsonToBinResult"></a>

## abiJsonToBinResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| binargs | [<code>bytes</code>](#bytes) | 

<a name="abiBinToJsonResult"></a>

## abiBinToJsonResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| args | [<code>bytes</code>](#bytes) | 

<a name="getTableRowsResult"></a>

## getTableRowsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rows | <code>vector</code> | One row per item, either encoded as hex String or JSON object |
| more | <code>bool</code> | True if last element in data is not the end and sizeof data() < limit |

<a name="getCurrencyStatsResult"></a>

## getCurrencyStatsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| supply | <code>asset</code> | 
| max_supply | <code>asset</code> | 
| issuer | <code>account_name</code> | 

<a name="getProducersResult"></a>

## getProducersResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rows | <code>vector</code> | one row per item, either encoded as hex String or JSON object |
| total_producer_vote_weight | <code>double</code> | total vote |
| more | <code>string</code> | fill lower_bound with this value to fetch more rows |

<a name="getProducerScheduleResult"></a>

## getProducerScheduleResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| vector | <code>proposed</code> | 

<a name="getScheduledTransactionsResult"></a>

## getScheduledTransactionsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| vector | <code>transactions</code> |  |
| more | <code>string</code> | fill lower_bound with this to fetch next set of transactions |

<a name="pushBlockResult"></a>

## pushBlockResult : <code>object</code>
**Kind**: global typedef  
<a name="pushTransactionResult"></a>

## pushTransactionResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| transaction_id | <code>fixed_bytes32</code> | 
| processed | [<code>bytes</code>](#bytes) | 

<a name="getActionsResult"></a>

## getActionsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| actions | <code>Array.&lt;ordered_action_result&gt;</code> | 
| last_irreversible_block | <code>uint32</code> | 
| [time_limit_exceeded_error] | <code>bool</code> | 

<a name="getTransactionResult"></a>

## getTransactionResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>transaction_id_type</code> | 
| trx | <code>variant</code> | 
| block_time | <code>block_timestamp_type</code> | 
| block_num | <code>uint32</code> | 
| last_irreversible_block | <code>uint32</code> | 
| traces | <code>Array.&lt;variant&gt;</code> | 

<a name="getKeyAccountsResult"></a>

## getKeyAccountsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_names | <code>Array.&lt;account_name&gt;</code> | 

<a name="getControlledAccountsResult"></a>

## getControlledAccountsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| controlled_accounts | <code>Array.&lt;account_name&gt;</code> | 

