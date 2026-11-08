const mapping = {
  'Locket': ['Gold']
};

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);
obj.Attention = "Locket Gold by Thanh Lê";

var subscriptionData = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-31T23:59:59Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2023-01-01T00:00:00Z",
  purchase_date: "2023-01-01T00:00:00Z",
  store: "app_store"
};

var entitlementData = {
  grace_period_expires_date: null,
  purchase_date: "2023-01-01T00:00:00Z",
  product_identifier: "com.locket.Locket.premium.yearly",
  expires_date: "2099-12-31T23:59:59Z"
};

if (ua.includes("Locket")) {
  if (!obj.subscriber) obj.subscriber = {};
  if (!obj.subscriber.subscriptions) obj.subscriber.subscriptions = {};
  if (!obj.subscriber.entitlements) obj.subscriber.entitlements = {};

  obj.subscriber.subscriptions["com.locket.Locket.premium.yearly"] = subscriptionData;
  obj.subscriber.entitlements["Gold"] = entitlementData;
  obj.subscriber.entitlements["pro"] = entitlementData;
  obj.subscriber.entitlements["premium"] = entitlementData;
}

$done({ body: JSON.stringify(obj) });