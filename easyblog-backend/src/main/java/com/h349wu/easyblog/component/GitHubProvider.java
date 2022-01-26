package com.h349wu.easyblog.component;

import com.alibaba.fastjson.JSON;
import com.h349wu.easyblog.dto.AccessTokenDTO;
import com.h349wu.easyblog.modal.User;
import okhttp3.*;
import org.springframework.stereotype.Component;

@Component
public class GitHubProvider {

    public String getAccessToken(AccessTokenDTO accessTokenDTO) {
        MediaType mediaType = MediaType.get("application/json; charset=utf-8");
        OkHttpClient client = new OkHttpClient();
        RequestBody body = RequestBody.create(mediaType, JSON.toJSONString(accessTokenDTO));
        Request request = new Request.Builder()
                .url("https://github.com/login/oauth/access_token")
                .post(body)
                .build();
        try (Response response = client.newCall(request).execute()) {
            String string = response.body().string();
            String[] split = string.split("&");
            String token = split[0].split("=")[1];
            return token;
        } catch (Exception e) {
            System.err.println("Sent Github OAuth2 request failed.");
        }

        return null;
    }

    public User getUser(String accessToken) {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url("https://api.github.com/user?access_token=" + accessToken)
                .header("Authorization", "token " + accessToken)
                .build();
        try (Response response = client.newCall(request).execute();) {
            String string = response.body().string();
            User user = JSON.parseObject(string, User.class);
            return user;
        } catch (Exception e) {
            System.err.println("Get Github User failed.");
            return null;
        }
    }
}
